function FindProxyForURL(url, host) {
    if (isPlainHostName(host) ||
        isInNet(host, "10.0.0.0", "255.0.0.0") ||
        isInNet(host, "172.16.0.0", "255.240.0.0") ||
        isInNet(host, "192.168.0.0", "255.255.0.0") ||
        isInNet(host, "127.0.0.0", "255.0.0.0") ||
        isInNet(host, "169.254.0.0", "255.255.0.0") ||
        dnsDomainIs(host, ".local") || dnsDomainIs(host, ".lan")) {
        return "DIRECT";
    }

    var blackhole = "PROXY 0.0.0.0:80";

    if (
        shExpMatch(host, "*doubleclick*") || shExpMatch(host, "*googlesyndication*") ||
        shExpMatch(host, "*googleadservices*") || shExpMatch(host, "*adserver*") ||
        shExpMatch(host, "*adsystem*") || shExpMatch(host, "*adform*") || shExpMatch(host, "*adnxs*") ||
        shExpMatch(host, "*pubmatic*") || shExpMatch(host, "*rubiconproject*") || shExpMatch(host, "*openx*") ||
        shExpMatch(host, "*casalemedia*") || shExpMatch(host, "*criteo*") || shExpMatch(host, "*appnexus*") ||
        shExpMatch(host, "*google-analytics*") || shExpMatch(host, "*googletagmanager*") ||
        shExpMatch(host, "*gtag*") || shExpMatch(host, "*analytics*") || shExpMatch(host, "*tracker*") ||
        shExpMatch(host, "*pixel*") || shExpMatch(host, "*beacon*") || shExpMatch(host, "*log*") ||
        shExpMatch(host, "*stat*") || shExpMatch(host, "*telemetry*") || shExpMatch(host, "*metrics*") ||
        shExpMatch(host, "*facebook*") && (shExpMatch(url, "*pixel*") || shExpMatch(url, "*track*")) ||
        shExpMatch(host, "*fbcdn*") || shExpMatch(host, "*instagram*") || shExpMatch(host, "*tiktok*") ||
        shExpMatch(host, "*snapchat*") || shExpMatch(host, "*twitter*") || shExpMatch(host, "*x.com*") ||
        shExpMatch(host, "*sentry*") || shExpMatch(host, "*crashlytics*") || shExpMatch(host, "*amplitude*") ||
        shExpMatch(host, "*segment*") || shExpMatch(host, "*hotjar*") || shExpMatch(host, "*mouseflow*") ||
        shExpMatch(host, "*coinhive*") || shExpMatch(host, "*cryptoloot*") || shExpMatch(host, "*miner*") ||
        shExpMatch(host, "*cryptojack*") || shExpMatch(host, "*malware*") || shExpMatch(host, "*phish*") ||
        shExpMatch(host, "*scam*") || shExpMatch(host, "*fake*") || shExpMatch(host, "*ransomware*") ||
        shExpMatch(host, "*akamai*") && shExpMatch(url, "*analytics*") ||
        shExpMatch(host, "*cloudfront*") && shExpMatch(url, "*track*")
    ) {
        return blackhole;
    }

    return "DIRECT";
}
