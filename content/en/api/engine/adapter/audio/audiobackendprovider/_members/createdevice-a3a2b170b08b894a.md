---
uid: api.a3a2b170b08b894af4f765764e2cb858c33621d44650f195436bb8e387aab176
symbol: "engine:Inno.Adapter.Audio:M:Inno.Adapter.Audio.AudioBackendProvider.CreateDevice(Inno.Adapter.Audio.AudioBackendOptions)"
source: xml
reviewed: bfc82147ea28145944bdb00bebe9ca731184aafcc5a6a6a448ae8e9aefce17a5
title: "CreateDevice"
kind: api
owners: [Inno.Adapter.Audio]
apiSurface: source-clr
---

Creates a caller-owned audio service using this implementation.

**Parameter `options`:** Backend-neutral device creation options.

**Returns:** A new service owned by the caller; providers must not return null.
