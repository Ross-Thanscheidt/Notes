.\docs-venv-init.ps1

pip install pip-system-certs

mkdocs gh-deploy -f mkdocs.publish.yml

pip uninstall pip-system-certs -y
