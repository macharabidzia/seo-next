import { client } from "@/sanity/lib/client";
import { MetadataRoute } from "next";

export default async function sitemap():Promise<MetadataRoute.Sitemap>{

  async function getPosts() {
    const query = `
    *[_type == "post"] {
      title,
      slug,
      publishedAt,
      excerpt,
      tags[]-> {
        _id,
        slug,
        name
      }
    }
    `;
    const data = await client.fetch(query);
    return data;
  }
  const posts = await getPosts();
  const postUrls = posts.map((post:any) => {
    return {
      url:`https://seo-next-pdhe.vercel.app/${post.slug.current}`,
      lastModified:new Date(post.publishedAt)
    }
  })
  
  return [
    {
      url:'https://seo-next-pdhe.vercel.app/',
      lastModified:new Date()
    },
    {
      url:'https://seo-next-pdhe.vercel.app/tag',
      lastModified:new Date()
    },
    ...postUrls
    
  ]
  
}