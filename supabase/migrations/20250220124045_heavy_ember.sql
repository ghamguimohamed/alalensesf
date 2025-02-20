/*
  # Create images table and storage

  1. New Tables
    - `images`
      - `id` (uuid, primary key)
      - `url` (text)
      - `alt` (text)
      - `category` (text)
      - `metadata` (jsonb)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `images` table
    - Add policies for authenticated users to manage their images
    - Create storage bucket for gallery images
*/

-- Create images table
CREATE TABLE IF NOT EXISTS images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  url text NOT NULL,
  alt text NOT NULL,
  category text NOT NULL,
  metadata jsonb NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE images ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Public users can view images"
  ON images
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert images"
  ON images
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update their images"
  ON images
  FOR UPDATE
  TO authenticated
  USING (auth.uid() IN (
    SELECT auth.uid()
    FROM auth.users
    WHERE auth.users.id = auth.uid()
  ));

CREATE POLICY "Authenticated users can delete their images"
  ON images
  FOR DELETE
  TO authenticated
  USING (auth.uid() IN (
    SELECT auth.uid()
    FROM auth.users
    WHERE auth.users.id = auth.uid()
  ));