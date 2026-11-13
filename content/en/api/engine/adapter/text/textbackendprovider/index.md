---
uid: api.inno.adapter.text.12af744bfa08f922
symbol: "engine:Inno.Adapter.Text:T:Inno.Adapter.Text.TextBackendProvider"
source: xml
reviewed: 3226aa0f668dbefa3791efc4802c16cb44f10e8ea500699b82022b5a7451e045
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
