---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "A Parallel Framework for Streaming Dimensionality Reduction"
authors:
- Jiazhi Xia
- Linquan Huang
- Yiping Sun
- Zhiwei Zhang
- Xiaolong Luke Zhang
- admin
date: 2024-01-02T15:46:02+08:00
doi: ""



publication: "IEEE Transactions on Visualization and Computer Graphics"
publication_short: "IEEE TVCG"

abstract: "The visualization of streaming high-dimensional data often needs to consider the speed in dimensionality reduction algorithms, the quality of visualized data patterns, and the stability of view graphs that usually change over time with new data. Existing methods of streaming high-dimensional data visualization primarily line up essential modules in a serial manner and often face challenges in satisfying all these design considerations. In this research, we propose a novel parallel framework for streaming high-dimensional data visualization to achieve high data processing speed, high quality in data patterns, and good stability in visual presentations. This framework arranges all essential modules in parallel to mitigate the delays caused by module waiting in serial setups. In addition, to facilitate the parallel pipeline, we redesign these modules with a parametric non-linear embedding method for new data embedding, an incremental learning method for online embedding function updating, and a hybrid strategy for optimized embedding updating. We also improve the coordination mechanism among these modules. Our experiments show that our method has advantages in embedding speed, quality, and stability over other existing methods to visualize streaming high-dimensional data."

# Summary. An optional shortened abstract.
summary: ""

tags: ["Timeline", "Mobility", "Mobility Transition", "Mobility Patterns"]
categories: []
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf: https://ieeexplore.ieee.org/abstract/document/10292610
url_code: https://github.com/DRLib/StreamDR
url_dataset:
url_poster:
url_project:
url_slides:
url_source:
url_video:



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
