---
uid: api.inno.adapter.text.12af744bfa08f922
symbol: "engine:Inno.Adapter.Text:T:Inno.Adapter.Text.TextBackendProvider"
source: xml
reviewed: 7c1b6439c3f687e19724196dcae6d8476d4acb3cd8020bc0e2ad747b059ee539
title: "TextBackendProvider"
kind: api
owners: [Inno.Adapter.Text]
apiSurface: source-clr
contracts:
- project.inno-adapter-text#provider-and-ownership-contract
aliases: []
---

Describes one explicitly composed text implementation and its creation boundary.

## Remarks

The composition owns this provider and its immutable registration identity. Products are owned by their callers. This registration does not perform type discovery.
