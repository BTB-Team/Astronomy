export const galleryPreview = [

  "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?q=80&w=1200&auto=format&fit=crop",

];

export const galleryExtra = [
  "https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=1200&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1473615695634-d284ec918736?q=80&w=1200&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?q=80&w=1200&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1447433819943-74a20887a81e?q=80&w=1200&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=1200&auto=format&fit=crop"  
];

export const galleryData = [

  ...galleryPreview.map((img, index) => ({
    id: index + 1,
    // title: `Astronomy Moment ${index + 1}`,
    // category: "Featured",
    image: img,
  })),

  ...galleryExtra.map((img, index) => ({
    id: index + 100,
    // title: `Deep Space Image ${index + 1}`,
    // category: "Space",
    image: img,
  })),

];