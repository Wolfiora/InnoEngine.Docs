---
uid: api.inno.adapter.input.d585604caa2a1412
symbol: "engine:Inno.Adapter.Input:T:Inno.Adapter.Input.InputBackendProvider"
source: xml
reviewed: c9e1a76591db916e694b2a57699239ea1df195a7ca8473cfd918325ae3cf699f
title: "InputBackendProvider"
kind: api
owners: [Inno.Adapter.Input]
apiSurface: source-clr
contracts:
- project.inno-adapter-input#ownership-and-threading
aliases: []
---

Describes one explicitly composed input implementation and its creation boundary.

## Remarks

The composition owns this provider and its immutable registration identity. Products are owned by their callers. This registration does not perform type discovery.
