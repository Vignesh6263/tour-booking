import Tour from "../models/Tour.js";

export const createTour = async (req, res) => {
   try {
      let savedTours;
      if (Array.isArray(req.body)) {
         // Handle multiple tours
         savedTours = await Tour.insertMany(req.body);
      } else {
         // Handle single tour (for backward compatibility)
         const newTour = new Tour(req.body);
         savedTours = await newTour.save();
      }
      res.status(200).json({ success: true, message: "Successfully created", data: savedTours });
   } catch (error) {
      res.status(500).json({ success: false, message: "Failed to create. Try again!", error: error.message });
   }
};

//Update Tour
export const updateTour = async (req, res) => {
   const id = req.params.id

   try {
      const updatedTour = await Tour.findByIdAndUpdate(id, {
         $set: req.body
      }, { new: true })

      res.status(200).json({ success: true, message: 'Successfully updated', data: updatedTour })
   } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to update' })
   }
}

//Delete Tour
export const deleteTour = async (req, res) => {
   const id = req.params.id

   try {
      await Tour.findByIdAndDelete(id)

      res.status(200).json({ success: true, message: 'Successfully deleted' })
   } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to delete' })
   }
}

//Getsingle Tour
export const getSingleTour = async (req, res) => {
   const id = req.params.id

   try {
      const tour = await Tour.findById(id).populate('reviews')

      res.status(200).json({ success: true, message: 'Successfully', data: tour })
   } catch (error) {
      res.status(404).json({ success: false, message: 'Not Found' })
   }
}

//Get All Tour
export const getAllTour = async (req, res) => {
   const page = parseInt(req.query.page) || 0; // Default to page 0
   const limit = 5; // Match frontend expectation

   try {
      const tours = await Tour.find({})
         .populate('reviews')
         .skip(page * limit)
         .limit(limit);
      console.log(`Fetched tours for page ${page}:`, tours); // Log fetched tours
      res.status(200).json({
         success: true,
         count: tours.length,
         message: 'Successfully fetched tours',
         data: tours,
      });
   } catch (error) {
      console.error('Error fetching tours:', error);
      res.status(404).json({ success: false, message: 'Tours not found' });
   }
}


// Get tour by search
export const getTourBySearch = async (req, res) => {

   // hear 'i' means case sensitive 
   const city = new RegExp(req.query.city, 'i')
   const distance = parseInt(req.query.distance)
   const maxGroupSize = parseInt(req.query.maxGroupSize)
   console.log(city,distance,maxGroupSize);
   try {
      // gte means greater than equal
      const tours = await Tour.find({ city, distance: { $gte: distance }, maxGroupSize: { $gte: maxGroupSize } }).populate('reviews')

      res.status(200).json({ success: true, message: 'Successfully', data: tours })
   } catch (error) {
      res.status(404).json({ success: false, message: 'Not Found' })
   }
}

//Get featured Tour
export const getFeaturedTour = async (req, res) => {
   //console.log(page)
   console.log("first")

   try {
      const tours = await Tour.find({ featured: true }).populate('reviews').limit(8)

      res.status(200).json({ success: true, message: 'Successfully', data: tours })
   } catch (error) {
      res.status(404).json({ success: false, message: 'Not Found' })
   }
}

//Get tour count 
export const getTourCount = async(req,res) => {
   try {
      const tourCount = await Tour.estimatedDocumentCount()

      res.status(200).json({success:true, data:tourCount})
   } catch (error) {
      res.status(500).json({success:false, message: "Failed to fetch"})
   }
}