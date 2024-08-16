


exports.getAllUserDetails = async (req, res) => {

    try {
       
        const id = req.user.id;

        //validation and get User details
        const userDetails = await User.findById(id).populate("additionalDetails").exec();


        //return response 

        return res.status(200).json({
            success: true,
            message: 'User data fetched successfully',
            data:userDetails
        })


    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

}