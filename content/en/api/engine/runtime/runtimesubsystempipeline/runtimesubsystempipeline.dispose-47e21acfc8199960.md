---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.47e21acfc819996050fcb138662357ce5cfad5489692680f592efabaa62a4975
symbol: engine:Inno.Runtime:M:Inno.Runtime.RuntimeSubsystemPipeline.Dispose
title: RuntimeSubsystemPipeline.Dispose
kind: api
owners:
- Inno.Runtime
apiSurface: source-clr
reviewed: 0136f77dee35695e0b70f1c85b974d8d47911b6eff8107e09744d9feb7a651da

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Detaches and disposes every subsystem in reverse dependency order.

## Exceptions

**Exception `T:System.AggregateException`:** Thrown after every release stage is attempted when one or more subsystems fail to detach or dispose.
