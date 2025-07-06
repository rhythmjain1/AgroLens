import React, { useState } from 'react';
import { Upload, Camera, Leaf, AlertCircle, CheckCircle, FileImage, X } from 'lucide-react';

const classMap = {
  0: {
      "name": "Apple Scab",
      "details": [
          "Caused by the fungus Venturia inaequalis.",
          "Results in dark, scabby lesions on leaves and fruit.",
          "Spreads more in wet and cool environments.",
          "Control with fungicides and by removing fallen leaves."
      ]
  },
  1: {
      "name": "Apple Black Rot",
      "details": [
          "Fungal disease affecting fruit and leaves.",
          "Causes concentric dark rings on leaves.",
          "Fruit may appear shriveled with dark spots.",
          "Prune infected branches and use appropriate fungicides."
      ]
  },
  2: {
      "name": "Apple Cedar Rust",
      "details": [
          "Caused by the fungus Gymnosporangium juniperi-virginianae.",
          "Bright orange spots on leaves are typical symptoms.",
          "Requires both apple and cedar trees to complete lifecycle.",
          "Remove nearby juniper hosts and apply fungicide."
      ]
  },
  3: {
      "name": "Apple (Healthy)",
      "details": [
          "No signs of disease or infection.",
          "Leaves appear green and vibrant.",
          "Maintain regular care and monitor plant health.",
          "Continue standard fertilization and watering."
      ]
  },
  4: {
      "name": "Blueberry (Healthy)",
      "details": [
          "No visible disease symptoms.",
          "Fruits are plump and leaves look vibrant.",
          "Regular pruning and soil testing is recommended.",
          "Maintain adequate irrigation without waterlogging."
      ]
  },
  5: {
      "name": "Cherry Powdery Mildew",
      "details": [
          "Caused by fungal pathogens like Podosphaera clandestina.",
          "White powdery substance on leaves is a key sign.",
          "Can affect blossoms and reduce fruit yield.",
          "Apply sulfur-based or systemic fungicides."
      ]
  },
  6: {
      "name": "Cherry (Healthy)",
      "details": [
          "No signs of mildew or other infections.",
          "Blossoms are clean and fruits develop well.",
          "Routine fertilization and pest control suggested.",
          "Prune trees to allow air circulation."
      ]
  },
  7: {
      "name": "Corn Cercospora Leaf Spot / Gray Leaf Spot",
      "details": [
          "Fungal disease caused by Cercospora zeae-maydis.",
          "Causes gray to tan rectangular lesions on leaves.",
          "Leads to reduced photosynthesis and yield.",
          "Use resistant hybrids and apply fungicide early."
      ]
  },
  8: {
      "name": "Corn Common Rust",
      "details": [
          "Characterized by reddish-brown pustules on leaves.",
          "Caused by Puccinia sorghi fungus.",
          "Spreads via wind-blown spores.",
          "Use resistant varieties and apply fungicide if severe."
      ]
  },
  9: {
      "name": "Corn Northern Leaf Blight",
      "details": [
          "Caused by Exserohilum turcicum fungus.",
          "Produces long, cigar-shaped lesions.",
          "Develops under humid and moderate temperature.",
          "Control with hybrid resistance and crop rotation."
      ]
  },
  10: {
      "name": "Corn (Healthy)",
      "details": [
          "No disease symptoms detected.",
          "Leaves are green with no lesions.",
          "Maintain nitrogen levels and monitor closely.",
          "Irrigate and fertilize consistently."
      ]
  },
  11: {
      "name": "Grape Black Rot",
      "details": [
          "Fungal disease caused by Guignardia bidwellii.",
          "Causes black spots on leaves and fruits.",
          "Infected grapes dry out and turn into mummies.",
          "Remove mummified fruits and apply fungicides."
      ]
  },
  12: {
      "name": "Grape Esca (Black Measles)",
      "details": [
          "Complex disease with multiple fungi involved.",
          "Leaves show tiger-striping pattern.",
          "Grapes may crack and dry prematurely.",
          "Use trunk cleaning and avoid wounding vines."
      ]
  },
  13: {
      "name": "Grape Leaf Blight",
      "details": [
          "Fungal disease caused by Isariopsis leaf spot fungus.",
          "Irregular brown lesions appear on leaves.",
          "May reduce vine vigor and yield.",
          "Use contact fungicides and remove debris."
      ]
  },
  14: {
      "name": "Grape (Healthy)",
      "details": [
          "No fungal spots or discoloration visible.",
          "Leaves are green and healthy.",
          "Maintain proper pruning and irrigation.",
          "Regular pest monitoring is advised."
      ]
  },
  15: {
      "name": "Orange Citrus Greening",
      "details": [
          "Also known as Huanglongbing (HLB).",
          "Leaves turn yellow and fruits are misshapen.",
          "Caused by bacteria spread by psyllids.",
          "No cure; remove infected trees and control insects."
      ]
  },
  16: {
      "name": "Peach Bacterial Spot",
      "details": [
          "Caused by Xanthomonas campestris bacteria.",
          "Dark spots with yellow halos on leaves and fruit.",
          "Can lead to fruit cracking and drop.",
          "Use copper sprays and resistant varieties."
      ]
  },
  17: {
      "name": "Peach (Healthy)",
      "details": [
          "Healthy foliage with no lesions.",
          "Fruits grow uniformly without blemishes.",
          "Apply mulch and maintain tree shape with pruning.",
          "Protect against peach tree borers."
      ]
  },
  18: {
      "name": "Bell Pepper Bacterial Spot",
      "details": [
          "Small, dark lesions on leaves and fruit.",
          "Bacterial disease spread by water splashes.",
          "Avoid overhead watering and use copper sprays.",
          "Crop rotation helps reduce recurrence."
      ]
  },
  19: {
      "name": "Bell Pepper (Healthy)",
      "details": [
          "Shiny green fruits and firm stems.",
          "No visible signs of bacterial infection.",
          "Ensure adequate sun and water levels.",
          "Use composted organic material in soil."
      ]
  },
  20: {
      "name": "Potato Early Blight",
      "details": [
          "Caused by Alternaria solani fungus.",
          "Brown concentric rings on older leaves.",
          "Spreads during warm, humid conditions.",
          "Apply fungicides and remove infected foliage."
      ]
  },
  21: {
      "name": "Potato Late Blight",
      "details": [
          "Caused by Phytophthora infestans.",
          "Irregular dark spots with yellow border.",
          "Major cause of Irish famine historically.",
          "Use certified seed and fungicides."
      ]
  },
  22: {
      "name": "Potato (Healthy)",
      "details": [
          "Lush green canopy and well-developed tubers.",
          "No fungal spots or leaf curl observed.",
          "Proper hilling and irrigation help growth.",
          "Ensure pH and nutrient balance in soil."
      ]
  },
  23: {
      "name": "Raspberry (Healthy)",
      "details": [
          "Healthy leaves and berries without discoloration.",
          "Maintain trellis system and prune yearly.",
          "Water at base to avoid fungal infections.",
          "Inspect for mites and borers regularly."
      ]
  },
  24: {
      "name": "Soybean (Healthy)",
      "details": [
          "Dark green trifoliate leaves.",
          "Consistent pod development observed.",
          "Scout fields for pests like aphids.",
          "Apply foliar nutrition if needed."
      ]
  },
  25: {
      "name": "Squash Powdery Mildew",
      "details": [
          "White, powdery spots on leaf surfaces.",
          "Caused by various Erysiphe species.",
          "Promotes defoliation and fruit decline.",
          "Use resistant varieties and fungicides."
      ]
  },
  26: {
      "name": "Strawberry Leaf Scorch",
      "details": [
          "Caused by Diplocarpon earlianum fungus.",
          "Small purplish spots that coalesce on leaves.",
          "Reduces photosynthesis and yield.",
          "Practice crop rotation and avoid crowding."
      ]
  },
  27: {
      "name": "Strawberry (Healthy)",
      "details": [
          "Glossy green leaves with no scorch or lesions.",
          "Flowers and fruits appear vibrant.",
          "Mulch to prevent soil splash disease.",
          "Monitor for fungal and insect damage."
      ]
  },
  28: {
      "name": "Tomato Bacterial Spot",
      "details": [
          "Dark, greasy-looking spots on leaves and fruits.",
          "Caused by Xanthomonas species.",
          "Spread via contaminated tools and water.",
          "Use copper-based bactericides and rotate crops."
      ]
  },
  29: {
      "name": "Tomato Early Blight",
      "details": [
          "Brown spots with concentric rings.",
          "Lower leaves affected first.",
          "Caused by Alternaria solani.",
          "Apply fungicide early and stake plants."
      ]
  },
  30: {
      "name": "Tomato Late Blight",
      "details": [
          "Large dark spots with fuzzy white edges.",
          "Spreads quickly in cool, wet weather.",
          "Caused by Phytophthora infestans.",
          "Destroy infected plants and spray fungicide."
      ]
  },
  31: {
      "name": "Tomato Leaf Mold",
      "details": [
          "Yellow spots turn brown and moldy underneath.",
          "Thrives in humid, poorly ventilated greenhouses.",
          "Use resistant varieties and ensure airflow.",
          "Remove infected leaves regularly."
      ]
  },
  32: {
      "name": "Tomato Septoria Leaf Spot",
      "details": [
          "Tiny dark spots with light centers on leaves.",
          "Does not affect fruit directly but lowers yield.",
          "Caused by Septoria lycopersici.",
          "Apply fungicides and remove lower leaves."
      ]
  },
  33: {
      "name": "Tomato Spider Mites",
      "details": [
          "Fine webbing and stippling on leaves.",
          "Leaves may curl and drop.",
          "Caused by two-spotted spider mites.",
          "Use miticides and neem oil sprays."
      ]
  },
  34: {
      "name": "Tomato Target Spot",
      "details": [
          "Circular brown spots with target-like rings.",
          "Caused by Corynespora cassiicola.",
          "Found on leaves, stems, and fruits.",
          "Spray appropriate fungicides."
      ]
  },
  35: {
      "name": "Tomato Yellow Leaf Curl Virus",
      "details": [
          "Leaves curl upward and turn yellow.",
          "Stunted plant growth and fruit drop.",
          "Transmitted by whiteflies.",
          "Use insect nets and resistant cultivars."
      ]
  },
  36: {
      "name": "Tomato Mosaic Virus",
      "details": [
          "Mottled or mosaic pattern on leaves.",
          "Stunted growth and poor fruit set.",
          "Spread through infected hands and tools.",
          "No cure; remove infected plants."
      ]
  },
  37: {
      "name": "Tomato (Healthy)",
      "details": [
          "Vigorous plant growth and fruit setting.",
          "No yellowing, curling, or dark spots.",
          "Support plants with stakes or cages.",
          "Regularly monitor for pests and diseases."
      ]
  }
};

export default function App() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    processFile(selected);
  };

  const processFile = (selected) => {
    if (selected && selected.type.startsWith('image/')) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
      setPrediction(null);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const droppedFile = e.dataTransfer.files[0];
    processFile(droppedFile);
  };

  const clearFile = () => {
    setFile(null);
    setPreview(null);
    setPrediction(null);
  };

  const handleUpload = async () => {
    if (!file) return;
    
    setIsLoading(true);
    
    // Simulate API call with mock response
    // setTimeout(() => {
    //   const mockIndex = Math.floor(Math.random() * 38);
    //   const result = classMap[mockIndex] || { name: "Unknown", details: ["No information available."] };
    //   setPrediction(result);
    //   setIsLoading(false);
    // }, 2000);

    // For real API, uncomment below:
    
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('https://agro-lens.vercel.app', formData);
      const index = res.data.prediction;
      setPrediction(classMap[index] || { name: "Unknown", details: ["No information available."] });
    } catch (err) {
      console.error(err);
      setPrediction({ name: "Error", details: ["Prediction failed. Please try again."] });
    } finally {
      setIsLoading(false);
    }
    
  };

  const isHealthy = prediction?.name.includes('Healthy');
  const isError = prediction?.name === 'Error';

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Header */}
      <div className="bg-white/70 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl">
              <Leaf className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
              Plant Disease Detector
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Upload Section */}
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 sm:p-8 border border-green-100">
              <div className="text-center mb-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                  Upload Plant Image
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  Drop an image or click to browse
                </p>
              </div>

              {/* File Upload Area */}
              <div
                className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 ${
                  isDragOver
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-300 hover:border-green-400 hover:bg-green-50/50'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  accept="image/*"
                  id="file-upload"
                />
                
                {!preview ? (
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <div className="p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full">
                        <Upload className="h-8 w-8 text-green-600" />
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-medium text-gray-700">
                        Drop your image here
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Supports JPG, PNG, WebP
                      </p>
                    </div>
                    <label
                      htmlFor="file-upload"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl"
                    >
                      <Camera className="h-5 w-5 mr-2" />
                      Choose Image
                    </label>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="relative inline-block">
                      <img
                        src={preview}
                        alt="Preview"
                        className="max-w-full max-h-64 rounded-xl shadow-md object-contain"
                      />
                      <button
                        onClick={clearFile}
                        className="absolute -top-2 -right-2 p-1 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors duration-200"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <FileImage className="h-4 w-4" />
                      <span>{file?.name}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Predict Button */}
              <button
                onClick={handleUpload}
                disabled={!file || isLoading}
                className={`w-full mt-6 py-4 px-6 rounded-xl font-semibold text-white transition-all duration-200 ${
                  !file || isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Analyzing...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Leaf className="h-5 w-5" />
                    <span>Detect Disease</span>
                  </div>
                )}
              </button>
            </div>

            {/* Info Card */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">How it works</h3>
                  <p className="text-sm text-blue-700">
                    Upload a clear image of your plant's leaves or affected areas. Our AI will analyze the image and provide detailed information about potential diseases and treatment recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {prediction && (
              <div className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 sm:p-8 border-2 transition-all duration-300 ${
                isHealthy ? 'border-green-200 bg-green-50/50' : 
                isError ? 'border-red-200 bg-red-50/50' : 
                'border-orange-200 bg-orange-50/50'
              }`}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-3 rounded-full ${
                    isHealthy ? 'bg-green-100' : 
                    isError ? 'bg-red-100' : 
                    'bg-orange-100'
                  }`}>
                    {isHealthy ? (
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    ) : (
                      <AlertCircle className={`h-6 w-6 ${isError ? 'text-red-600' : 'text-orange-600'}`} />
                    )}
                  </div>
                  <div>
                    <h2 className={`text-xl sm:text-2xl font-bold ${
                      isHealthy ? 'text-green-800' : 
                      isError ? 'text-red-800' : 
                      'text-orange-800'
                    }`}>
                      {prediction.name}
                    </h2>
                    <p className={`text-sm ${
                      isHealthy ? 'text-green-600' : 
                      isError ? 'text-red-600' : 
                      'text-orange-600'
                    }`}>
                      {isHealthy ? 'Plant appears healthy' : 
                       isError ? 'Analysis failed' : 
                       'Disease detected'}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {isHealthy ? 'Care Instructions:' : 
                     isError ? 'Error Details:' : 
                     'Treatment Information:'}
                  </h3>
                  <div className="space-y-2">
                    {prediction.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start space-x-3 p-3 bg-white/60 rounded-xl">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          isHealthy ? 'bg-green-500' : 
                          isError ? 'bg-red-500' : 
                          'bg-orange-500'
                        }`}></div>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {!prediction && !isLoading && (
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-lg p-8 text-center border border-gray-200">
                <div className="space-y-4">
                  <div className="p-4 bg-gray-100 rounded-full w-fit mx-auto">
                    <Leaf className="h-12 w-12 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">
                      Ready to analyze
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Upload an image of your plant to get started with disease detection and care recommendations.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
