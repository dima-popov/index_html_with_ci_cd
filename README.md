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
6. Login to Container Registry with Personal access token that you created in DigitalOcean API tab.
   ```bash
   docker login registry.digitalocean.com
   ```
7. Push the local Docker image to the DigitalOcean Container Registry:
   ```bash
   docker tag simple-html registry.digitalocean.com/<repo-name>/simple-html
   docker push registry.digitalocean.com/<repo-name>/simple-html
   ```
8. Create a new app on the DigitalOcean App Platform.
9. Select "Deploy from DigitalOcean Container Registry" and select your image.
10. Ensure the "Autodeploy on image update" checkbox is checked.
11. Ensure that you use 80 port for container, not 8080 or other (change it in App Platform).

Set "secrets" in GitHub.

Now, when you push something to the main branch of your GitHub repository, tests will be started, then the image will be built and pushed to the DigitalOcean Container Registry, and finally, it will be deployed on the App Platform.

[DigitalOcean App Platform with Container Registry](https://www.youtube.com/watch?v=YAeOzVTN4EQ)
[DigitalOcean App Platform](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-container-images/)
[DigitalOcean Container Registry](https://docs.digitalocean.com/products/container-registry/getting-started/quickstart/)
