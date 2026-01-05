
// this is for the code when i used google gemini api for image generation

// import { Request, Response } from 'express';
// import Thumbnail from '../models/Thumbnail.js';
// import { GenerateContentConfig, HarmBlockThreshold, HarmCategory } from '@google/genai';
// import ai from '../configs/ai.js';
// import path from 'path';
// import fs from 'fs';
// import {v2 as cloudinary} from 'cloudinary';

// const stylePrompts ={
//     'Bold & Graphic': 'eye-catching, bold typography   vibrant colors expressive facial reaction, dramatic lighting, high contrast, click-worthy, compostion professional style', 
//     'Tech/Futuristic': 'futuristic thumbnail, sleek modern design, digital UI elements, glowing accents, holographic effects, cyber-tech aesthetic, sharp lighting, high-tech atmosphere',
//     'Minimalist': 'minimalist thumbnail, clean layout, simple shapes, limited color palette, plenty of negative space, modern flat design, clear focal point',
//     'Photorealistic': 'photorealistic thumbnail, ultra-realistic lighting, natural skin tones, candid moment, DSLR-style photography, lifestyle realism, shallow depth of field',
//     'Illustrated': 'illustrated thumbnail, custom digital illustration, stylized characters, bold outlines, vibrant colors, creative cartoon or vector art style',
// }

// const colorSchemeDescriptions={
//     vibrant: 'vibrant and energetic colors, high saturation, bold contrasts, eye-catching palette',
//     sunset: 'warm sunset tones, orange pink and purple hues, soft gradients, cinematic glow',
//     forest: 'natural green tones, earthy colors, calm and organic palette, fresh atmosphere',
//     neon: 'neon glow effects, electric blues and pinks, cyberpunk lighting, high contrast glow',
//     purple: 'purple-dominant color palette, magenta and violet tones, modern and stylish mood',
//     monochrome: 'black and white color scheme, high contrast, dramatic lighting, timeless aesthetic',
//     ocean: 'cool blue and teal tones, aquatic color palette, fresh and clean atmosphere',
//     pastel: 'soft pastel colors, low saturation, gentle tones, calm and friendly aesthetic',
// }

// export const generateThumbnail = async (req: Request, res: Response) => {
//      try{
//           const {userId} = req.body;
//           const {
//                 title,
//                 prompt:user_prompt,
//                 style,
//                 aspect_ratio,
//                 color_scheme,
//                 text_overlay } = req.body;
       
//                 // creating these data in database
//                 const thumbnail = await Thumbnail.create({
//                     userId,
//                     title,
//                     prompt_used: user_prompt,
//                     user_prompt,
//                     style,
//                     aspect_ratio,
//                     color_scheme,
//                     text_overlay,
//                     isGenerating:true
//                 })

//                 // for generating thumbnail we will use geminai pro 3 models
//                 const model = "gemini-3-pro-image-preview";

//                 // configuration for generating image
//                 const generationConfig:  GenerateContentConfig={
//                     maxOutputTokens:32768,
//                     temperature:1,
//                     topP:0.95,
//                     responseModalities:['IMAGE'],
//                     imageConfig:{
//                         aspectRatio:  aspect_ratio ||'16:9',
//                         imageSize:'1K'
//                     },
//                     safetySettings:[
//                         {category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.OFF},
//                         {category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.OFF},
//                         {category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.OFF},
//                         {category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.OFF},

//                     ]
//                 }

//                 // Generating the prompt for thumbnail
//                 let prompt = `Create a ${stylePrompts[style as keyof typeof stylePrompts]}  for:"${title}"`;
//                 if(color_scheme){
//                     prompt += `Use a ${colorSchemeDescriptions[color_scheme as keyof typeof colorSchemeDescriptions]} color scheme.`
//                 }
//                 if(user_prompt){
//                     prompt += `Additional details: ${user_prompt}.`
//                 }
//                 prompt+=`The thumbnail should be ${aspect_ratio}, visually stunning, and designed to maximize click-through rates. 
//                 Make it bold, professional, and impossible to ignore!`

//                 // Generating the image using the AI model
//                 const response: any = await ai.models.generateContent({
//                             model,
//                             contents:[prompt],
//                             config:generationConfig
//                 })

//                 // Check if the response is valid
//                 if(!response?.candidates?.[0]?.content?.parts){
//                     throw new Error('Failed to generate thumbnail image.');  
//                 }
//                 const parts = response.candidates[0].content.parts;

//                 // creating  final image

//                 let finalBuffer: Buffer | null=null;
//                 for(const part of parts){
//                     if(part.inlineData){
//                         finalBuffer = Buffer.from(part.inlineData.data,'base64')
//                     }
//                 }
//                 // creating  unique filename for thumbnail
//                 const filename = `final-output-${Date.now()}.png`;
//                 //  generating path name
//                 const filePath = path.join('images', filename);

//                 // creating the image dorectory if not exists
//                 fs.mkdirSync('images',{recursive:true});
//                 // Writing the final image to the file system
//                 fs.writeFileSync(filePath, finalBuffer!);

//                 // updating the thumbnail result into cloudinary 
//                 const uploadResult = await cloudinary.uploader.upload
//                 (filePath, { resource_type: 'image',} )

//                 // updating the thumbnail document url in database
//                 thumbnail.image_url = uploadResult.url;
//                 thumbnail.isGenerating = false;
//                 // saving the data into mongodb database
//                 await thumbnail.save();

//                 res.json({
//                     message:'Thumbnail generated successfully',
//                     thumbnail
//                 })

//                 // removing image from local storage after upload to cloudinary
                 
//                 fs.unlinkSync(filePath);

                

//      }
//      catch(error:any){
//                   console.log(error);
//                     res.status(500).json({message: error.message}); 
//      }
// }


// // creating deleteThumbnail controller
// export const deleteThumbnail = async (req: Request, res: Response) => {
//     try{
//           const {id} = req.params;
//           const {userId} = req.session;
//             // finding and deleting the thumbnail
//             await Thumbnail.findByIdAndDelete({_id:id, userId});

//             res.json({ message:'Thumbnail deleted successfully'});
//     }

//     catch(error:any){
//                   console.log(error);
//                     res.status(500).json({message: error.message}); 
//      }

// }



// -------------------- NEW CODE USING HUGGING FACE API --------------------
// what is changed: generateThumbnail controller is changed to use hugging face api for image generation
// what is same: deleteThumbnail controller is same as before
// what is hagging face api: hugging face api is a popular ai model hosting platform where we can find various ai models for image generation, text generation, etc.
// how it works: we will use stabilityai/stable-diffusion-xl-base-1.0 model for generating thumbnails
// where to get api key: we can get hugging face api key from https://huggingface.co/settings/tokens
// how to use: we will use fetch to call hugging face api for image generation
// any package installation: we need to install node-fetch package for making api calls

import { Request, Response } from "express";
import Thumbnail from "../models/Thumbnail.js";
import path from "path";
import fs from "fs";
import fetch from "node-fetch";
import { v2 as cloudinary } from "cloudinary";

/* -------------------- PROMPT HELPERS -------------------- */

const stylePrompts: Record<string, string> = {
  'Bold & Graphic':'eye-catching, bold typography, vibrant colors, dramatic lighting, high contrast, click-worthy YouTube thumbnail',
  "Tech/Futuristic":
    "futuristic thumbnail, sleek modern design, glowing UI elements, cyber-tech aesthetic",
  "Minimalist":
    "minimalist thumbnail, clean layout, simple shapes, limited colors, modern design",
  "Photorealistic":
    "photorealistic thumbnail, ultra realistic lighting, DSLR photography, shallow depth of field",
  "Illustrated":
    "illustrated thumbnail, stylized characters, bold outlines, vibrant digital illustration",
};

const colorSchemeDescriptions: Record<string, string> = {
  vibrant: "vibrant energetic colors, bold contrast",
  sunset: "warm sunset tones, cinematic glow",
  forest: "natural green earthy tones",
  neon: "neon glow, cyberpunk lighting",
  purple: "purple dominant palette, magenta tones",
  monochrome: "black and white, high contrast",
  ocean: "cool blue and teal tones",
  pastel: "soft pastel colors, gentle tones",
};

/* -------------------- GENERATE THUMBNAIL -------------------- */

export const generateThumbnail = async (req: Request, res: Response) => {
  try {
    /*  AUTH (IMPORTANT) */
    // Make sure to have user authentication middleware before this controller
    const userId = req.session.userId;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const {
      title,
      prompt: user_prompt,
      style,
      aspect_ratio,
      color_scheme,
      text_overlay,
    } = req.body;
    if (!title?.trim()) {
      return res.status(400).json({ message: "Title is required" });
    }

    /* -------------------- BUILD PROMPT -------------------- */
    // Construct the prompt for image generation
    let prompt = `Create a ${
      stylePrompts[style] || stylePrompts["Bold & Graphic"]
    } for "${title}". `;

    if (color_scheme) {
      prompt += `Use ${
        colorSchemeDescriptions[color_scheme] || color_scheme
      } color scheme. `;
    }

    if (user_prompt) {
      prompt += `Additional details: ${user_prompt}. `;
    }

    prompt += `Aspect ratio ${
      aspect_ratio || "16:9"
    }, bold, professional, high CTR YouTube thumbnail.`;

    /* -------------------- HUGGING FACE IMAGE GENERATION -------------------- */
    // Call Hugging Face API to generate the image
    const hfResponse = await fetch(
      "https://router.huggingface.co/hf-inference/models/stabilityai/stable-diffusion-xl-base-1.0",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json",
        },
        // Send the constructed prompt as input to the model
        body: JSON.stringify({ inputs: prompt }),
      }
    );
// Check for errors in the response
    if (!hfResponse.ok) {
      throw new Error(await hfResponse.text());
    }
// Get the image data from the response
    const buffer = Buffer.from(await hfResponse.arrayBuffer());

    /* -------------------- SAVE TEMP FILE -------------------- */
    // Save the generated image temporarily to disk
    const filename = `thumb-${Date.now()}.png`;
    const filePath = path.join("images", filename);
// Ensure the images directory exists
    fs.mkdirSync("images", { recursive: true });
    fs.writeFileSync(filePath, buffer);

    /* -------------------- UPLOAD TO CLOUDINARY -------------------- */
    // Upload the image to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(filePath, {
      resource_type: "image",
      folder: "thumbnails",
    });
// Remove the temporary file from disk
    fs.unlinkSync(filePath);

    /* -------------------- SAVE TO DATABASE (ONCE) -------------------- */
    // Create the thumbnail document in MongoDB
    const thumbnail = await Thumbnail.create({
      userId,
      title,
      style,
      aspect_ratio,
      color_scheme,
      text_overlay,
      prompt_used: user_prompt,
      user_prompt,
      image_url: uploadResult.secure_url,
      isGenerating: false,
    });

    /* -------------------- RESPONSE -------------------- */
    // Send back the created thumbnail
    res.status(200).json({
      message: "Thumbnail generated successfully",
      thumbnail,
    });
  } 
     catch (error: any) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

/* -------------------- DELETE THUMBNAIL -------------------- */

export const deleteThumbnail = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.session.userId;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const thumbnail = await Thumbnail.findOne({ _id: id, userId });
    if (!thumbnail) {
      return res.status(404).json({ message: "Thumbnail not found" });
    }

    // Optional: delete from Cloudinary too
    if (thumbnail.image_url) {
      const publicId = thumbnail.image_url
        .split("/")
        .pop()
        ?.split(".")[0];
      if (publicId) {
        await cloudinary.uploader.destroy(`thumbnails/${publicId}`);
      }
    }

    await Thumbnail.deleteOne({ _id: id });

    res.json({ message: "Thumbnail deleted successfully" });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
