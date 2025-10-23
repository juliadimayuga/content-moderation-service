import { Router } from "express";
import {
    moderatePost,
    flagUser,
    getPostById,
    getUserProfile,
    getFlaggedContentStats,
} from "../controllers/moderationController";

const router: Router = Router();

/**
 * @openapi
 * /post/:id:
 *   get:
 *     summary: Retrieve a post by it's ID
 *     tags: [Posts]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The specific post's ID
 *     responses:
 *       '200':
 *         description: Post retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 content:
 *                   type: string
 *                 author:
 *                   type: string
 *                 isFlagged:
 *                   type: boolean
 *                 createdAt:
 *                   type: string
 *                   format: datetime
 *                 updatedAt:
 *                   type: string
 *                   format: datetime
 */
router.get("/post/:id", getPostById);
router.post("/post/:id/moderate", moderatePost);

/**
 * @openapi
 * /user/:id/profile:
 *   get:
 *     summary: Retrieve a user's profile by their ID
 *     tags: [Profile]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The specific user's ID
 *     responses:
 *       '200':
 *         description: User profile retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 username:
 *                   type: string
 *                 bio:
 *                   type: string
 *                 isFlagged:
 *                   type: boolean
 *                 joinedAt:
 *                   type: string
 *                   format: datetime
 *                 postsCount:
 *                   type: number
 */
router.get("/user/:id/profile", getUserProfile);
router.post("/user/:id/flag", flagUser);
router.get("/content/flags/stats", getFlaggedContentStats);

export default router;