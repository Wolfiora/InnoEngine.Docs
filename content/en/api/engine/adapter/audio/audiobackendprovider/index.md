---
uid: api.inno.adapter.audio.ab7b1a41e14a0c0b
symbol: "engine:Inno.Adapter.Audio:T:Inno.Adapter.Audio.AudioBackendProvider"
source: xml
reviewed: 29a8543bcc2d923f0b26d7cfaab153967bead7cd73994e15a84df6db297b8696
title: "AudioBackendProvider"
kind: api
owners: [Inno.Adapter.Audio]
apiSurface: source-clr
contracts:
- project.inno-adapter-audio#provider-ownership-contract
aliases: []
---

Describes one explicitly composed audio implementation and its creation boundary.

## Remarks

The composition owns this provider and its immutable registration identity. Products are owned by their callers. This registration does not perform type discovery.
