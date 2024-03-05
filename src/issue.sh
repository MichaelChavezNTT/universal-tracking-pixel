#!/bin/bash

# Define the output file
output_file="issue.md"

# Clear the output file if it already exists
> "$output_file"

# Find all .ts files recursively in the current directory and its subdirectories, excluding .d.ts files
find . -type f -name '*.ts' ! -name '*.d.ts' | while IFS= read -r file; do
    # Write the file name to the output file
    echo "**$file**" >> "$output_file"
    
    # Write the code block with cat contents to the output file
    echo '```ts' >> "$output_file"
    cat "$file" >> "$output_file"
    echo '```' >> "$output_file"
    
    # Add a newline to separate the sections
    echo >> "$output_file"
done

echo "Done! Check $output_file for the results."
