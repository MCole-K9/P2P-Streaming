import type { paths } from '$lib/types/tmdb';


// Response obj


// First define helper types to enforce the shape of the API paths
type ApiEndpoint = {
    get: {
      responses: {
        200: {
          content: {
            "application/json": {
              schema: unknown;
            };
          };
        };
      };
    };
  };
  
  // Use a constraint to ensure T extends the correct shape
  export type ApiSuccessResponse<T extends keyof paths> = paths[T] extends ApiEndpoint 
    ? paths[T]["get"]["responses"][200]["content"]["application/json"]["schema"]
    : never;
  