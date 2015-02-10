package com.schooling.service;

import static org.elasticsearch.node.NodeBuilder.nodeBuilder;

import java.util.concurrent.ExecutionException;

import org.elasticsearch.action.get.GetResponse;
import org.elasticsearch.client.Client;
import org.elasticsearch.node.Node;
import org.springframework.stereotype.Component;

@Component
public class ElasticSearchServiceImpl {

	public GetResponse search(long documentId) throws InterruptedException, ExecutionException {
		Node node = nodeBuilder().clusterName("pratikgarg").node();
		Client client = node.client();
		 GetResponse response = client.prepareGet("schools", "school", "1")
		        .execute()
		        .actionGet();
		return response;
	}
}
