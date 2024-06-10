import { Router } from 'express';
import { sample_appliances, sample_tags } from '../data';
import asyncHandler from 'express-async-handler';
import { AppliancesModel } from '../models/appliances.model';
const router = Router();

router.get(
  '/seed',
  asyncHandler(async (req, res) => {
    const appliancesCount = await AppliancesModel.countDocuments();
    if (appliancesCount > 0) {
      res.send('Seed is already done!');
      return;
    }

    await AppliancesModel.create(sample_appliances);
    res.send('Seed Is Done!');
  })
);

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const appliances = await AppliancesModel.find();
    res.send(appliances);
  })
);


router.get(
  '/search/:searchTerm',
  asyncHandler(async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const appliances = await AppliancesModel.find({ name: { $regex: searchRegex } });
    res.send(appliances);
  })
);

router.get(
  '/tags',
  asyncHandler(async (req, res) => {
    const tags = await AppliancesModel.aggregate([
      {
        $unwind: '$tags',
      },
      {
        $group: {
          _id: '$tags',
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          name: '$_id',
          count: '$count',
        },
      },
    ]).sort({ count: -1 });

    const all = {
      name: 'All',
      count: await AppliancesModel.countDocuments(),
    };

    tags.unshift(all);
    res.send(tags);
  })
);

router.get(
  '/tag/:tagName',
  asyncHandler(async (req, res) => {
    const query = await AppliancesModel.find({ tags: req.params.tagName });
    res.send(query);
  })
);

router.get(
  '/:appliancesId',
  asyncHandler(async (req, res) => {
    const query = await AppliancesModel.findById(req.params.appliancesId);
    res.send(query);
  })
);

export default router;
