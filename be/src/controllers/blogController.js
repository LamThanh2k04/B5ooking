import { responseSuccess } from "../helpers/response.helper.js";
import { blogService } from "../services/blogService.js";

export const blogController = {
  // Lấy tất cả blog
  getAllBlogs: async function (req, res, next) {
    try {
      const blogs = await blogService.getAllBlogs();
      const response = responseSuccess(blogs, "Lấy danh sách blog thành công");
      res.status(response.status).json(response);
    } catch (err) {
      console.error("Lấy danh sách blog không thành công", err);
      next(err);
    }
  },
  // Lấy blog theo slug
  getBlogBySlug: async function (req, res, next) {
    try {
      const  slug  = req.params.slug;
      const blog = await blogService.getBlogBySlug(slug);
      const response = responseSuccess(blog, "Lấy blog thành công");
      return res.status(response.status).json(response);
    } catch (err) {
      console.error("Lấy blog không thành công", err);
      next(err);
    }
  },

  // Lấy tất cả blog theo locationId
  getAllBlogsByLocationId: async function (req, res, next) {
    try {
      const locationId = parseInt(req.params.locationId);
      const blogs = await blogService.getAllBlogsByLocationId(locationId);
      const response = responseSuccess(blogs, "Lấy danh sách blog theo locationId thành công");
      return res.status(response.status).json(response);
    } catch (err) {
      console.error("Lấy danh sách blog theo locationId không thành công", err);
      next(err);
    }
  }

}