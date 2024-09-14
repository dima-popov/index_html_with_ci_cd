# index_html_with_ci_cd

## To use locally:

1. Install Git and Docker Desktop.
2. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
3. Build the Docker image by running the following command in the repository's terminal:
   ```bash
   docker build -t simple-html .
   ```
   You can run the image with:
   ```bash
   docker run -p 8080:80 simple-html
   ```
4. Create a DigitalOcean account.
5. Create a repository in the DigitalOcean Container Registry.
6. Push the local Docker image to the DigitalOcean Container Registry:
   ```bash
   docker tag simple-html registry.digitalocean.com/<repo-name>/simple-html
   docker push registry.digitalocean.com/<repo-name>/simple-html
   ```
7. Create a new app on the DigitalOcean App Platform.
8. Select "Deploy from DigitalOcean Container Registry" and select your image.
9. Ensure the "Autodeploy on image update" checkbox is checked.

Now, when you push something to the main branch of your GitHub repository, tests will be started, then the image will be built and pushed to the DigitalOcean Container Registry, and finally, it will be deployed on the App Platform.
