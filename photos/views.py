from django.shortcuts import render
from django.http import HttpResponse
from django.template import Template, Context
from django.template.loader import get_template
import datetime

# Create your views here.
def home(request):
    return HttpResponse("Hello World, Django")

def hours_ahead(request, offset):
    try:
        offset = int(offset)
    except ValueError:
        raise Http404()
    t = get_template('testTemplate.html')
    dt = datetime.datetime.now() + datetime.timedelta(hours=offset)
    time = {'hours':offset, 'now': dt}
    html = t.render(Context({'time':time}))
    return HttpResponse(html)

def display_meta(request):
    values = request.META.items()
    values.sort()
    html = []
    for k, v in values:
        html.append('<tr><td>%s</td><td>%s</td></tr>' % (k, v))
    return HttpResponse('<table>%s</table>' % '\n'.join(html))
