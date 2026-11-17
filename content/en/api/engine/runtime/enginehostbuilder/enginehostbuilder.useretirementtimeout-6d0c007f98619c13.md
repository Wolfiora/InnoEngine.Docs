---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6d0c007f98619c13e7062df114c2766ce1ed0e51b23a90f08b2780fc4f9fddfb
symbol: engine:Inno.Runtime:M:Inno.Runtime.EngineHostBuilder.UseRetirementTimeout(System.TimeSpan)
title: EngineHostBuilder.UseRetirementTimeout
kind: api
owners:
- Inno.Runtime
apiSurface: source-clr
reviewed: 1be0dbfde382b86833044a193928f92e2bb1292e8b0af313a916230fd0bdaee7
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
