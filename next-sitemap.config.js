const siteUrl = "https://bialoskorski.eu";

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: "*", disallow: "/projects" },
            { userAgent: "*", disallow: "/projects/*" },
            { userAgent: "*", allow: "/" },
        ],
    },
    exclude: ["/projects", "/projects/*"],
};