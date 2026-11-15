---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.200c10d037915871c044935ac00ef40b8ed9a62170ae5c2af2eae7ccf592f1ec
symbol: engine:Inno.Editor.Hosting:M:Inno.Editor.Hosting.EditorCommandLineOptions.Parse(System.String[])
title: EditorCommandLineOptions.Parse
kind: api
owners:
- Inno.Editor.Hosting
apiSurface: source-clr
reviewed: 4a7786a2abcbaa6cae0b61b5c23180352d63bbb0cde70fedfa9c183c2ceb4647

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Parses the common Editor command line without selecting a platform.

## Parameters

**Parameter `arguments`:** The project path followed by optional name/value pairs.

## Returns

The immutable project startup configuration.

## Exceptions

**Exception `T:System.ArgumentException`:** The project or an option is missing, repeated or invalid.
