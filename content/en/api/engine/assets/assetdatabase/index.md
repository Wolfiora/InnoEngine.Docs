---
uid: api.inno.assets.6d1e482179c7cd34
symbol: "engine:Inno.Assets:T:Inno.Assets.AssetDatabase"
source: xml
reviewed: 5f5bca01a53f78064db25bcefb4e32ccc26e2d0daea2293a905861bc90d8f4fa
title: "AssetDatabase"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
contracts:
- project.inno-assets
aliases: []
---

Loads canonical runtime assets exclusively from a verified catalog and content-addressed artifact bundles.

## Remarks

This database never reads project source files, creates source mounts, runs importers, or writes content. One runtime session owns one database instance and disposes it before releasing its identity services.

Separates immutable artifact preparation from owner-thread asset materialization.
