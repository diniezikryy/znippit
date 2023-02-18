import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://ivjmzycaipbxwbaydcco.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2am16eWNhaXBieHdiYXlkY2NvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY1NDg4OTQsImV4cCI6MTk5MjEyNDg5NH0.YelHFRr6prZGakLDHLCbwjmSbKNm4d3DxnusqU9VKnQ"
);
