*Django powered site*

Requirements:
-------------
- [python3][python3]
- [virtualenv][virtualenv]
- [pip][pip]

Installation:
-------------
1. Install `virtualenv`, `pip` and `python3` globally before you proceed.
2. Clone the repository
3. Download the **images** folder from [here][images] and place it in `website/static/`. DO IT CAREFULLY.
4. Open terminal and **cd** into the root of the cloned directory.
5. Create a virtual environment with `virtualenv -p /path/to/python3/executable .`
6. Activate the virtual environment with `source bin/activate`
7. Install the requirements with `pip install -r requirements.txt`
8. Run **collectstatic** and the environment is all setup for development.

[python3]: https://docs.python.org/3/using/
[virtualenv]: https://virtualenv.pypa.io/en/stable/installation/
[pip]: https://pip.pypa.io/en/stable/installing/
[images]: https://drive.google.com/open?id=0B2fvOZxngk3hOGRaWVA1R2o5ejA
