
# Water Quality

This repository contains a comprehensive Water Quality Analysis project that includes data analysis, machine learning implementation in a Django backend, and a React.js frontend. The project is containerized using Docker Compose for easy deployment and scalability.
## Table of Contents

- [Introduction](#introduction)
- [Project Scope and Features](#project-scope-and-features)
- [Project Structure](#project-structure)
- [Requirements](#requirements)
- [Installation and Setup](#installation-and-setup)
- [Demo](#demo)
- [Contributing](#contributing)
- [License](#license)
## Introduction
This Water Quality Analysis project focuses on classifying water samples into Potable and Non-potable classes. The classification model utilizes various water quality parameters, such as pH, hardness, total dissolved solids, chloramines, sulfate, conductivity, organic carbon, trihalomethanes, and turbidity. The project aims to address the significance of water quality, especially in impoverished regions, and advocates for everyone's right to access clean and safe water.
#### Importance of Water Quality Analysis
Water is a precious and essential resource for all living beings. The quality of water directly impacts human health, agriculture, and the environment. Unfortunately, many underprivileged communities in developing countries face severe challenges in obtaining access to clean and safe drinking water. Waterborne diseases and water quality degradation pose significant risks, leading to illnesses, economic burdens, and social disparities.

Analyzing and understanding water quality data are crucial steps in identifying potential health hazards and addressing water-related issues effectively. By studying water quality parameters, we can assess the suitability of water for various purposes, including drinking, irrigation, and industrial use. This project emphasizes the significance of water quality analysis in ensuring the well-being of communities, particularly in regions where clean water is scarce.
#### Potable and Non-potable Water Classification
One of the primary objectives of this project is to classify water samples into two categories: Potable and Non-potable. Potable water refers to water that is safe for human consumption without any significant risk to health. Non-potable water, on the other hand, may contain contaminants or exceed the permissible limits of certain parameters, making it unsuitable for drinking.

The classification model built as part of this project leverages machine learning techniques to predict whether a given water sample falls into the Potable or Non-potable class. By accurately classifying water samples, we can provide valuable insights for decision-makers, governments, and communities to take appropriate actions to improve water quality and ensure safe drinking water access for all.
## Project Scope and Features
The Water Quality Analysis project comprises the following key features:

1. Data Preprocessing: The provided dataset, containing water quality parameters, undergoes preprocessing to handle missing values, normalization, and feature engineering. This ensures that the data is suitable for training the machine learning model.

2. Machine Learning Model: We implement a classification model using a suitable algorithm (e.g., Random Forest, Support Vector Machine, etc.) to predict the potability of water samples based on the input parameters.

3. Django Backend: The backend, built with Django, serves as the foundation for the classification model. It handles data processing, prediction requests, and interactions with the frontend.

4. React.js Frontend: The frontend, developed with React.js, offers an intuitive web interface where users can input water quality parameters and view the predicted potability class.

5. Docker Compose: The project is containerized using Docker Compose, making it easy to deploy and run the entire application stack consistently across different environments.
## Project Structure
The project is organized into the following directories:

- `/data`: Contains the dataset used for water quality analysis.
- `/backend`: Django backend implementation.
- `/frontend`: React.js frontend implementation.
- `/notebooks`: Contains the Jupyter notebook (`Water_Quality_Analysis.ipynb`) for data analysis.
- `docker-compose.yml`: Docker Compose configuration file for orchestrating the entire application.
## Requirements
To run this project locally, you need to have the following installed on your system:
- [Docker](https://docs.docker.com/desktop/install/windows-install/)
- [Docker Compose](https://docs.docker.com/compose/)

## Installation and Setup

1. Clone the repository to your local machine:

```bash
git clone https://github.com/sankalpa-adhikari-sa/Water-Quality-Classification.git
```
2. Change directory to the project folder:
```bash
cd Water-Quality-Classification
```
3. Build the Docker images and set up the project:
```bash
docker-compose build
docker-compose up -d
```
4. Access the application:
- Frontend
```bash
http://localhost:5173
```
- Backend
```bash
http://localhost:8000
```
## Demo

Here's a Quick demo how webapp looks like
![waterquality](https://github.com/sankalpa-adhikari-sa/Water-Quality-Classification/assets/106131019/0ae2f74a-6bdb-4398-b5e0-38321826dcb0)

 
## Contributing

Contributions are always welcome!

If you find any issues or want to add new features, feel free to submit a pull request.


## License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License. You are free to modify and distribute the code as long as you retain the original license and attribution.
