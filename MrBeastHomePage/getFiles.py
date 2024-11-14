import os

def list_files_in_folder(folder_path):
    # Check if the provided path is a directory
    if not os.path.isdir(folder_path):
        print("Error: The provided path is not a directory.")
        return

    # Get list of all files in the folder
    files = os.listdir(folder_path)

    # Surround each file name with double quotes
    files_quoted = ['"{}"'.format(file) for file in files]

    # Convert the list of quoted file names into a comma-separated string
    files_csv = ', '.join(files_quoted)

    return files_csv

def write_to_txt(file_list, output_file):
    with open(output_file, 'w', encoding='utf-8') as f:  # Specify encoding as utf-8
        f.write(file_list)

# Example usage:
folder_path = 'MrBeastHay'  # Change this to your desired folder path
output_file = 'file_list.txt'  # Change this to your desired output file name

files_list = list_files_in_folder(folder_path)
write_to_txt(files_list, output_file)
print("List of files in the folder has been written to", output_file)
