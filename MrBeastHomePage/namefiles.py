import os

def rename_files(folder_path):
    # Iterate over all files in the folder
    for filename in os.listdir(folder_path):
        # Split the filename into name and extension
        name, ext = os.path.splitext(filename)
        
        # Find the last occurrence of parentheses
        last_open_paren_index = name.rfind('(')
        last_close_paren_index = name.rfind(')')
        
        if last_open_paren_index != -1 and last_close_paren_index != -1:
            # Extract the substring between the last parentheses
            id_string = name[last_open_paren_index + 1:last_close_paren_index]
            new_name = 'thumb_' + id_string + ext
            # Construct the new file path
            new_path = os.path.join(folder_path, new_name)
            # Construct the old file path
            old_path = os.path.join(folder_path, filename)
            # Rename the file
            os.rename(old_path, new_path)
            print(f'Renamed "{filename}" to "{new_name}"')

# Replace 'folder_path' with the path to your folder containing the files
folder_path = 'MrBeastThumbs'
rename_files(folder_path)
