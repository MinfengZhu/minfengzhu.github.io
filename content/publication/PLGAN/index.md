---
title: "Interactive Image Synthesis with Panoptic Layout Generation"
authors:
- Bo Wang
- Tao Wu
- admin
- Peng Du
date: "2022-04-07T00:00:00Z"
doi: ""

# Publication name and optional abbreviated publication name.
publication: "IEEE/CVF Conference on Computer Vision and Pattern Recognition"
publication_short: "CVPR"

abstract: Interactive image synthesis from user-guided input is a challenging task when users wish to control the scene structure of a generated image with ease. Although remarkable progress has been made on layout-based image synthesis approaches, existing methods require high-precision inputs such as accurately placed bounding boxes, which might be constantly violated in an interactive setting. When placement of bounding boxes is subject to perturbation, layout-based models suffer from" missing regions" in the constructed semantic layouts and hence undesirable artifacts in the generated images. In this work, we propose Panoptic Layout Generative Adversarial Network (PLGAN) to address this challenge. The PLGAN employs panoptic theory which distinguishes object categories between" stuff" with amorphous boundaries and" things" with well-defined shapes, such that stuff and instance layouts are constructed through separate branches and later fused into panoptic layouts. In particular, the stuff layouts can take amorphous shapes and fill up the missing regions left out by the instance layouts. We experimentally compare our PLGAN with state-of-the-art layout-based models on the COCO-Stuff, Visual Genome, and Landscape datasets. The advantages of PLGAN are not only visually demonstrated but quantitatively verified in terms of inception score, Frechet inception distance, classification accuracy score, and coverage.

tags:
- GAN
- Image Synthesis 

featured: false

# links:
# - name: Custom Link
#   url: http://example.org
url_pdf: 'https://openaccess.thecvf.com/content/CVPR2022/papers/Wang_Interactive_Image_Synthesis_With_Panoptic_Layout_Generation_CVPR_2022_paper.pdf'
url_code: 'https://github.com/wb-finalking/PLGAN'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
# image:
#   caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/s9CC2SKySJM)'
#   focal_point: ""
#   preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
