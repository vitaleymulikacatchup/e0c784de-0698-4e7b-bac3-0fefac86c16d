"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { BookOpen, ChefHat, MapPin, MessageCircle, Star } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Spice Palace"
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Authentic Indian Flavors"
          description="Experience the rich tastes of traditional Indian cuisine with our carefully crafted dishes made from the finest spices and ingredients"
          tag="Traditional Cuisine"
          tagIcon={ChefHat}
          buttons={[
            {
              text: "View Menu",
              href: "product"
            },
            {
              text: "Order Online",
              href: "contact"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/19834446/pexels-photo-19834446.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        />
      </div>
      
      <div id="product" data-section="product">
        <ProductCardTwo
          title="Signature Dishes"
          description="Discover our most popular traditional Indian dishes, each prepared with authentic recipes passed down through generations"
          tag="Featured Menu"
          tagIcon={Star}
          products={[
            {
              id: "1",
              brand: "Spice Palace",
              name: "Butter Chicken",
              price: "$16.99",
              rating: 5,
              reviewCount: "1.2k",
              imageSrc: "https://images.pexels.com/photos/16068667/pexels-photo-16068667.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              brand: "Spice Palace",
              name: "Chicken Biryani",
              price: "$18.99",
              rating: 5,
              reviewCount: "890",
              imageSrc: "https://images.pexels.com/photos/25440685/pexels-photo-25440685.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              brand: "Spice Palace",
              name: "Tandoori Chicken",
              price: "$15.99",
              rating: 4,
              reviewCount: "756",
              imageSrc: "https://images.pexels.com/photos/5031938/pexels-photo-5031938.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              brand: "Spice Palace",
              name: "Dal Makhani",
              price: "$12.99",
              rating: 5,
              reviewCount: "643",
              imageSrc: "https://images.pexels.com/photos/28674710/pexels-photo-28674710.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "5",
              brand: "Spice Palace",
              name: "Samosa Platter",
              price: "$8.99",
              rating: 4,
              reviewCount: "521",
              imageSrc: "https://images.pexels.com/photos/14883758/pexels-photo-14883758.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "6",
              brand: "Spice Palace",
              name: "Garlic Naan",
              price: "$4.99",
              rating: 5,
              reviewCount: "1.5k",
              imageSrc: "https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>
      
      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Hear from food lovers who've experienced the authentic flavors of our Indian cuisine"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Food Blogger",
              company: "Taste & Tell",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8448072/pexels-photo-8448072.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Mike Chen",
              role: "Restaurant Critic",
              company: "City Eats",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/33033815/pexels-photo-33033815.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Priya Patel",
              role: "Local Foodie",
              company: "Spice Lover",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/23286041/pexels-photo-23286041.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "David Kumar",
              role: "Family Diner",
              company: "Regular Customer",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3184177/pexels-photo-3184177.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>
      
      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Indian Cuisine Insights"
          description="Discover the stories, traditions, and secrets behind authentic Indian cooking"
          tag="Food Stories"
          tagIcon={BookOpen}
          blogs={[
            {
              id: "1",
              category: "Spices",
              title: "The Ultimate Guide to Indian Spices",
              excerpt: "Learn about the essential spices that make Indian cuisine so flavorful and aromatic",
              imageSrc: "https://images.pexels.com/photos/12944725/pexels-photo-12944725.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              authorName: "Chef Raj",
              authorAvatar: "https://images.pexels.com/photos/30660319/pexels-photo-30660319.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "15 Dec 2024"
            },
            {
              id: "2",
              category: "Cooking",
              title: "Traditional Indian Cooking Techniques",
              excerpt: "Discover time-honored methods passed down through generations of Indian chefs",
              imageSrc: "https://images.pexels.com/photos/14731637/pexels-photo-14731637.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              authorName: "Anjali Sharma",
              authorAvatar: "https://images.pexels.com/photos/8818723/pexels-photo-8818723.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "8 Dec 2024"
            },
            {
              id: "3",
              category: "Culture",
              title: "Festival Foods and Their Significance",
              excerpt: "Explore the special dishes prepared during Indian festivals and their cultural meaning",
              imageSrc: "https://images.pexels.com/photos/8819852/pexels-photo-8819852.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              authorName: "Vikram Singh",
              authorAvatar: "https://images.pexels.com/photos/23286041/pexels-photo-23286041.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "2 Dec 2024"
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Visit Us"
          tagIcon={MapPin}
          title="Experience Authentic Indian Dining"
          description="Join our community of food lovers and be the first to know about new dishes, special events, and exclusive offers at Spice Palace"
          imageSrc="https://images.pexels.com/photos/9316203/pexels-photo-9316203.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          inputPlaceholder="Enter your email for updates"
          buttonText="Join Our Family"
          termsText="By joining, you agree to receive updates about our latest dishes and special offers. Unsubscribe anytime."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Menu",
              items: [
                {
                  label: "Appetizers",
                  href: "product"
                },
                {
                  label: "Main Dishes",
                  href: "product"
                },
                {
                  label: "Desserts",
                  href: "product"
                },
                {
                  label: "Beverages",
                  href: "product"
                }
              ]
            },
            {
              title: "About",
              items: [
                {
                  label: "Our Story",
                  href: "blog"
                },
                {
                  label: "Chef's Recipes",
                  href: "blog"
                },
                {
                  label: "Reviews",
                  href: "testimonial"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Order Online",
                  href: "contact"
                },
                {
                  label: "Reservations",
                  href: "contact"
                },
                {
                  label: "Catering",
                  href: "contact"
                }
              ]
            }
          ]}
          copyrightText="© 2024 Spice Palace - Authentic Indian Restaurant"
        />
      </div>
    </ThemeProvider>
  );
}