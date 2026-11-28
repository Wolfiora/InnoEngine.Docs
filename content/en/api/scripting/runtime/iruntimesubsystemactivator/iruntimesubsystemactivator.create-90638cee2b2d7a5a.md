---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.90638cee2b2d7a5a49777cde9556270c44ca62aa85521a94ae3cff67e96b8277
symbol: scripting:Inno.Runtime.Contracts:M:InnoEngine.Runtime.IRuntimeSubsystemActivator.Create(InnoEngine.Runtime.RuntimeSubsystemContext)
title: IRuntimeSubsystemActivator.Create
kind: api
owners:
- Inno.Runtime.Contracts
apiSurface: editor-script
sourceFingerprint: 0600a8078ae48aeafeb31b313dfe42130cfeb1ed8d7572a4f30cde5ac108316b
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** Stable foundation services and a private factory lifetime. Register partial allocations and work here before callbacks can fail.

## Returns

A new unattached runtime subsystem; after returning, its lifecycle belongs to the pipeline.
