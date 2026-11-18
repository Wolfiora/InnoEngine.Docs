---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.6d0c007f98619c13e7062df114c2766ce1ed0e51b23a90f08b2780fc4f9fddfb
symbol: engine:Inno.Runtime:M:Inno.Runtime.EngineHostBuilder.UseRetirementTimeout(System.TimeSpan)
title: EngineHostBuilder.UseRetirementTimeout
kind: api
owners:
- Inno.Runtime
apiSurface: source-clr
sourceFingerprint: d55cd5b2e1b31df96b0e18307c21adfde3c5c95e0c08e5eaecff8594f92280f4
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `timeout`:** A positive deadline shared by failed startup, session stop and host shutdown.

## Returns

This builder for fluent configuration.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** The timeout is not positive.
