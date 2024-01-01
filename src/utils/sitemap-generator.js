import GenerateSitemap from "react-router-sitemap-maker";
import MyRoutes from "../Components/sitemap-routes";

const sitemapData = GenerateSitemap(MyRoutes(), {
    baseUrl: "https://www.matthewtingley.ca",
    hashrouting: false,
    changeFrequency: "monthly"
});

sitemapData.toFile("./dist/sitemap.xml");