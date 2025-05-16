
import { useState } from 'react';
import AnimatedElement from './AnimatedElement';
import { Card, CardContent } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

type MediaItem = {
  id: number;
  title: string;
  type: 'image' | 'video';
  thumbnail: string;
  description: string;
};

const mediaItems: MediaItem[] = [
  {
    id: 1,
    title: "Architectural Photography",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
    description: "Modern architectural design captured with precision"
  },
  {
    id: 2,
    title: "Brand Campaign",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    description: "Lifestyle photography for marketing campaigns"
  },
  {
    id: 3,
    title: "Product Showcase",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "Professional product photography highlighting key features"
  },
  {
    id: 4,
    title: "Corporate Event",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    description: "Full coverage of corporate events and conferences"
  },
  {
    id: 5,
    title: "Nature Documentary",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    description: "Stunning landscape cinematography and environmental stories"
  },
  {
    id: 6,
    title: "Social Media Content",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    description: "Engaging short-form content for social platforms"
  }
];

const MediaSection = () => {
  const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all');
  
  const filteredMedia = filter === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.type === filter);

  return (
    <section id="media" className="py-28 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedElement>
          <h2 className="section-heading text-white after:bg-white">Media</h2>
        </AnimatedElement>
        
        <div className="flex justify-center mb-12 space-x-4">
          <AnimatedElement type="fade-in" delay="delay-100">
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-2 transition-colors ${filter === 'all' ? 'bg-white text-black' : 'bg-transparent text-white border border-white'}`}
            >
              All
            </button>
          </AnimatedElement>
          <AnimatedElement type="fade-in" delay="delay-200">
            <button 
              onClick={() => setFilter('image')}
              className={`px-6 py-2 transition-colors ${filter === 'image' ? 'bg-white text-black' : 'bg-transparent text-white border border-white'}`}
            >
              Photography
            </button>
          </AnimatedElement>
          <AnimatedElement type="fade-in" delay="delay-300">
            <button 
              onClick={() => setFilter('video')}
              className={`px-6 py-2 transition-colors ${filter === 'video' ? 'bg-white text-black' : 'bg-transparent text-white border border-white'}`}
            >
              Videography
            </button>
          </AnimatedElement>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMedia.map((item, index) => (
            <AnimatedElement 
              key={item.id} 
              type="fade-in" 
              delay={`delay-${(index % 3) * 100}` as any} 
              threshold={0.1}
            >
              <Card className="bg-transparent border border-white/20 overflow-hidden">
                <div className="portfolio-item group h-[300px] relative cursor-pointer">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="portfolio-overlay">
                    <h3 className="text-xl font-sans font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-white/70">{item.description}</p>
                    <div className="mt-4">
                      {item.type === 'video' ? (
                        <span className="inline-flex items-center px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white">
                          <span className="mr-2">●</span> Video
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white">
                          <span className="mr-2">◉</span> Photo
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <CardContent className="p-4 border-t border-white/20">
                  <h3 className="font-medium text-white">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.type === 'image' ? 'Photography' : 'Videography'}</p>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>
        
        <AnimatedElement type="fade-in" delay="delay-400" className="mt-16">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default MediaSection;
