import os
from PIL import Image

def convert_webp_to_png(input_dir, output_dir):
    # Create the output directory if it doesn't exist
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # Loop through all files in the input directory
    for filename in os.listdir(input_dir):
        if filename.endswith('.webp'):
            # Open the WebP image
            with Image.open(os.path.join(input_dir, filename)) as img:
                # Convert and save as PNG
                img.save(os.path.join(output_dir, os.path.splitext(filename)[0] + '.png'), 'PNG')
                print(f"Converted {filename} to PNG")

# Specify input and output directories
input_directory = 'MrBeastThumbs'
output_directory = 'output_directory_path'

# Convert WebP to PNG
convert_webp_to_png(input_directory, output_directory)
