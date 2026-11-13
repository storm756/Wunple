import type { MetadataRoute } from "next";
import { ALL_PRODUCTS } from "@/data/products";
import { ALL_BLOGS } from "@/data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://wunple.com";

  // Core Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Product detail routes
  const productRoutes: MetadataRoute.Sitemap = ALL_PRODUCTS.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Published Blog routes
  const now = new Date();
  const liveBlogs = ALL_BLOGS.filter((post) => new Date(post.publishDate) <= now);
  const blogRoutes: MetadataRoute.Sitemap = liveBlogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishDate),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}
