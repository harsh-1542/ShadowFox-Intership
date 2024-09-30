import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Grid2, Link } from '@mui/material';

const Footer = () => {
    return (
        <div>
            <Grid2
                container
                direction="column" // Arrange everything vertically
                justifyContent="space-between" // Space items across height
                className="bg-black text-white text-center mt-10"
                sx={{
                    bgcolor: "black",
                    color: "white",
                    py: 3,
                    px: 20,
                    
                }}
            >
                {/* Top section: Company, Solutions, Documentation, Legal */}
                <Grid2
                    container
                    justifyContent="space-between"
                    alignItems="flex-start"
                >
                    <Grid2 item xs={12} sm={6} md={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center", }} >

                        <Typography variant="h6" className="pb-5">
                            Company
                        </Typography>

                        {/* Using Button for links with spacing */}
                        <div>
                            <Button variant="h6" className="pb-5" gutterBottom sx={{ color: "white", mb: 2 }}> About </Button>
                        </div>
                        <div>
                            <Button variant="h6" className="pb-5" gutterBottom sx={{ color: "white", mb: 2 }}> Blog </Button>
                        </div>
                        <div>
                            <Button variant="h6" className="pb-5" gutterBottom sx={{ color: "white", mb: 2 }}> Press </Button>
                        </div>
                        <div>
                            <Button variant="h6" className="pb-5" gutterBottom sx={{ color: "white", mb: 2 }}> Jobs </Button>
                        </div>
                        <div>
                            <Button variant="h6" className="pb-5" gutterBottom sx={{ color: "white", mb: 2 }}> Partners </Button>
                        </div>
                    </Grid2>

                    <Grid2 item xs={12} sm={6} md={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center", }} >

                        <Typography variant="h6" className="pb-5">
                            Solutions
                        </Typography>

                        {/* Using Button for links with spacing */}
                        <div>
                            <Button variant="h6" className="pb-5" gutterBottom sx={{ color: "white", mb: 2 }}> Marketing </Button>
                        </div>
                        <div>
                            <Button variant="h6" className="pb-5" gutterBottom sx={{ color: "white", mb: 2 }}> Analytics </Button>
                        </div>
                        <div>
                            <Button variant="h6" className="pb-5" gutterBottom sx={{ color: "white", mb: 2 }}> Commerce </Button>
                        </div>
                        <div>
                            <Button variant="h6" className="pb-5" gutterBottom sx={{ color: "white", mb: 2 }}> Insights </Button>
                        </div>
                        <div>
                            <Button variant="h6" className="pb-5" gutterBottom sx={{ color: "white", mb: 2 }}> Support </Button>
                        </div>
                    </Grid2>

                    <Grid2 item xs={12} sm={6} md={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center", }} >

                        <Typography variant="h6" className="pb-5">
                            Documentation
                        </Typography>

                        {/* Using Button for links with spacing */}
                        <div>
                            <Button variant="h6" className="pb-5" gutterBottom sx={{ color: "white", mb: 2 }}> Guides </Button>
                        </div>
                        <div>
                            <Button variant="h6" className="pb-5" gutterBottom sx={{ color: "white", mb: 2 }}> API Status </Button>
                        </div>

                    </Grid2>

                    <Grid2 item xs={12} sm={6} md={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center", }} >

                        <Typography variant="h6" className="pb-5">
                            Legal
                        </Typography>

                        {/* Using Button for links with spacing */}
                        <div>
                            <Button variant="h6" className="pb-5" gutterBottom sx={{ color: "white", mb: 2 }}> Claim </Button>
                        </div>
                        <div>
                            <Button variant="h6" className="pb-5" gutterBottom sx={{ color: "white", mb: 2 }}> Privacy </Button>
                        </div>
                        <div>
                            <Button variant="h6" className="pb-5" gutterBottom sx={{ color: "white", mb: 2 }}> Terms </Button>
                        </div>

                    </Grid2>
                </Grid2>

                <Grid2
                    container
                    direction="column"
                    alignItems="center"
                    sx={{
                        mt: 3, // Margin top to push this to the bottom
                        borderTop: "1px solid gray", // Optional: Border for visual separation
                        pt: 3, // Padding to separate from top section
                    }}
                >

                    <Typography variant='body2' component="p" align='center'>
                        &copy; 2023 My Company. All rights reserved.
                    </Typography>
                    <Typography variant='body2' component="p" align='center'>
                        Made with Love by harsh.
                    </Typography>
                    <Typography variant='body2' component="p" align='center'>
                        Icons made by{' '}
                        <Link href="https://www.freeoik.com" color="inherit" underline='always'>

                            Freepik</Link>{' '}
                        form{' '}
                        <Link href="https://flaticon.com/" color='inherit' underline='always'>
                            www.flaticon.com</Link>
                    </Typography>
                </Grid2>
            </Grid2>
        </div>
    );
}

export default Footer;
