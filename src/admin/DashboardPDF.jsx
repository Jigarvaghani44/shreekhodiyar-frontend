// src/pages/DashboardPDF.jsx
import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import ChartRenderer from './ChartRenderer';  // You'll need to create this component

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 30,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#E5E7EB',
        paddingBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#111827',
    },
    date: {
        fontSize: 12,
        color: '#6B7280',
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB',
        paddingBottom: 5,
    },
    statsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    statCard: {
        width: '48%',
        marginBottom: 15,
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#F9FAFB',
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    statTitle: {
        fontSize: 12,
        color: '#6B7280',
        marginBottom: 5,
    },
    statValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111827',
    },
    statChange: {
        fontSize: 10,
        marginTop: 5,
    },
    chartContainer: {
        marginBottom: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 5,
    },
    chartTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: 10,
    },
    activityItem: {
        flexDirection: 'row',
        marginBottom: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    activityIcon: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#E5E7EB',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    activityContent: {
        flex: 1,
    },
    activityAction: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#111827',
    },
    activityDetails: {
        fontSize: 10,
        color: '#6B7280',
        marginTop: 2,
    },
    footer: {
        position: 'absolute',
        bottom: 20,
        left: 30,
        right: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: 10,
        color: '#6B7280',
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
        paddingTop: 10,
    },
});

// Create Document Component
const DashboardPDF = ({ stats, revenueData, enquiriesData }) => {
    const currentDate = new Date().toLocaleDateString();

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.title}>Company Dashboard Report</Text>
                    <Text style={styles.date}>Generated on: {currentDate}</Text>
                </View>

                {/* Key Metrics */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Key Metrics</Text>
                    <View style={styles.statsContainer}>
                        {stats.map((stat, index) => (
                            <View key={index} style={styles.statCard}>
                                <Text style={styles.statTitle}>{stat.name}</Text>
                                <Text style={styles.statValue}>{stat.value}</Text>
                                <Text style={[styles.statChange, {
                                    color: stat.changeType === 'increase' ? '#10B981' :
                                        stat.changeType === 'decrease' ? '#EF4444' : '#6B7280'
                                }]}>
                                    {stat.changeType === 'increase' ? '↑' :
                                        stat.changeType === 'decrease' ? '↓' : '→'} {stat.change} from last period
                                </Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Revenue Chart */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Revenue Growth</Text>
                    <View style={styles.chartContainer}>
                        <Text style={styles.chartTitle}>Last 7 Months Revenue</Text>
                        {/* In a real implementation, you would render a chart here */}
                        <View style={{ height: 200, backgroundColor: '#F3F4F6', justifyContent: 'center', alignItems: 'center' }}>
                            <Text>Revenue Chart Placeholder</Text>
                        </View>
                        {/* Alternatively, you could use a server-generated chart image */}
                        {/* <Image src="/path/to/chart-image.png" /> */}
                    </View>
                </View>

                {/* Enquiries Chart */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Enquiries Trend</Text>
                    <View style={styles.chartContainer}>
                        <Text style={styles.chartTitle}>Last 7 Months Enquiries</Text>
                        {/* In a real implementation, you would render a chart here */}
                        <View style={{ height: 200, backgroundColor: '#F3F4F6', justifyContent: 'center', alignItems: 'center' }}>
                            <Text>Enquiries Chart Placeholder</Text>
                        </View>
                    </View>
                </View>

                {/* Recent Activity */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Recent Activity</Text>
                    {[
                        { id: 1, action: 'Updated Portfolio Item', user: 'John Doe', time: '2 hours ago', type: 'update' },
                        { id: 2, action: 'Published New Blog Post', user: 'Jane Smith', time: '5 hours ago', type: 'create' },
                        { id: 3, action: 'Added New Testimonial', user: 'John Doe', time: '1 day ago', type: 'create' },
                        { id: 4, action: 'Updated Team Member', user: 'Jane Smith', time: '2 days ago', type: 'update' },
                    ].map((activity) => (
                        <View key={activity.id} style={styles.activityItem}>
                            <View style={styles.activityIcon}>
                                <Text>{activity.type === 'create' ? '+' : activity.type === 'update' ? '✎' : '✉'}</Text>
                            </View>
                            <View style={styles.activityContent}>
                                <Text style={styles.activityAction}>{activity.action}</Text>
                                <Text style={styles.activityDetails}>
                                    By {activity.user} • {activity.time}
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>

                {/* Footer */}
                <View style={styles.footer}>
                    <Text>Confidential - For internal use only</Text>
                    <Text>Page 1 of 1</Text>
                </View>
            </Page>
        </Document>
    );
};

export default DashboardPDF;