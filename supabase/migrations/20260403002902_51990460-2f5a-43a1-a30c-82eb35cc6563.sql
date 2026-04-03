
-- Drop the overly permissive SELECT policy
DROP POLICY IF EXISTS "Authenticated users can read documents" ON storage.objects;

-- Replace with owner-scoped SELECT policy
CREATE POLICY "Owner can read own documents"
ON storage.objects FOR SELECT
TO authenticated
USING (
  bucket_id = 'documents'
  AND (storage.foldername(name))[1] = auth.uid()::text
);
