---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.09a25ae014989b294bcc746b611ae490cc1db5e25730f373182b1e2e5c2c39f8
symbol: engine:Inno.Rendering:M:Inno.Rendering.RenderDevice.CreatePersistentBufferHandle(System.UInt64,System.UInt32)
title: RenderDevice.CreatePersistentBufferHandle
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
sourceFingerprint: a89d2de3f2d62baa18dc31240189e16e1311977a166caf7c6475c33f36e19d16
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `value`:** The backend-owned non-zero buffer identity.

**Parameter `generation`:** The device generation that owns the buffer.

## Returns

An opaque buffer handle suitable for the public render-device contract.
