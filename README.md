## Create your own DNS proxy using Node

Use cases

- Domain name validation for API
- Redirect traffic to new location contigent on origin
- And more

# Blueprint for custom domain link shorting service:

1. Users point a CNAME to this node instance (e.g. CNAME 3600 link this.node.proxy.com)
2. This proxy directs traffic to link.customdomain.com to redirect URL that user sets in dashboard
