---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.7a5f60e39a90dd8e039a439a1a33566310e1c5a56a2169d2cd87976854eee77d
symbol: engine:Inno.Input.Runtime:M:Inno.Input.Runtime.InputRuntimeFactory.Create(Inno.Runtime.Contracts.RuntimeSubsystemContext)
title: InputRuntimeFactory.Create
kind: api
owners:
- Inno.Input.Runtime
apiSurface: source-clr
reviewed: 42bdcbb7cec8895ca0b220cc6d17dc6c16908f50189211c6b77da0454fd3ea25

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Creates an input feature over a newly allocated session backend.

## Parameters

**Parameter `context`:** The isolated session context passed to the backend factory.

## Returns

A new input feature that exclusively owns its backend.
