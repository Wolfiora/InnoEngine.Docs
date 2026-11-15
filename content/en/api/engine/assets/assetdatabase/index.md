---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.assets.6d1e482179c7cd34
symbol: engine:Inno.Assets:T:Inno.Assets.AssetDatabase
title: AssetDatabase
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: 5f5bca01a53f78064db25bcefb4e32ccc26e2d0daea2293a905861bc90d8f4fa

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
contracts:
- project.inno-assets
aliases: []
---

Loads canonical runtime assets exclusively from a verified catalog and content-addressed artifact bundles.

Separates immutable artifact preparation from owner-thread asset materialization.

## Remarks

This database never reads project source files, creates source mounts, runs importers, or writes content. One runtime session owns one database instance and disposes it before releasing its identity services.
