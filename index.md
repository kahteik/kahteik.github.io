# Curriculum Vitae
{% include pdf.html %}

# My Projects
{% for repository in site.github.public_repositories %}
* [{{ repository.name }}]({{ repository.html_url }})
{% endfor %}
