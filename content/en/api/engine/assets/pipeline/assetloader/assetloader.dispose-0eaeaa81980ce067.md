---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0eaeaa81980ce067a748480a4b4cd61dd602c6266388a62241dbbace341f3f78
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.Dispose
title: AssetLoader.Dispose
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: 3bd090ff551e400c05914882c565314dcce26c0cccca4ab82a5f305aaef10307
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Exceptions

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** A load, serialized operation or unload hook is still active. Retain the loader and retry after quiescence.

**Exception `T:System.AggregateException`:** Completed releases failed; all quiescent resources have still been attempted.
