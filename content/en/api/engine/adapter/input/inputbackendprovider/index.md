---
uid: api.inno.adapter.input.d585604caa2a1412
symbol: "engine:Inno.Adapter.Input:T:Inno.Adapter.Input.InputBackendProvider"
source: xml
reviewed: 7ecbf97ca331baad46906b830bca9e0fb556dc5983f56b6f46d335cb4ed8944c
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
