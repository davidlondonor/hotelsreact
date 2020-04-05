import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

const Hotels = props => {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={props.hotels.photo} alt={props.hotels.slug} />
                </figure>
            </div>
            <div className="card-content">
                <p className="title is-4">{props.hotels.name}</p>
                <p>{props.hotels.description}</p>
                <div
                    className="field is-grouped is-grouped-multiline"
                    style={{ marginTop: "1em" }}
                >
                    <div className="control">
                        <div className="tags has-addons">
                            <span className="tag is-medium is-info">
                                <FontAwesomeIcon icon={fas.faMapMarker} />
                            </span>
                            <span className="tag is-medium">
                                {`${props.hotels.city}, ${props.hotels.country}`}
                            </span>
                        </div>
                    </div>
                    <div className="control">
                        <div className="tags has-addons">
                            <span className="tag is-medium is-info">
                                <FontAwesomeIcon icon={fas.faBed} />
                            </span>
                            <span className="tag is-medium">
                                {props.hotels.rooms} Habitaciones
                            </span>
                        </div>
                    </div>
                    <div className="control">
                        <div className="tags">
                            <span className="tag is-medium is-info">
                                <FontAwesomeIcon
                                    icon={fas.faDollarSign}
                                    style={{ margin: "0 .125em" }}
                                />
                                <FontAwesomeIcon
                                    icon={fas.faDollarSign}
                                    style={
                                        props.hotels.price >= 2
                                            ? { margin: "0 .125em" }
                                            : {
                                                  margin: "0 .125em",
                                                  opacity: ".25"
                                              }
                                    }
                                />
                                <FontAwesomeIcon
                                    icon={fas.faDollarSign}
                                    style={
                                        props.hotels.price >= 3
                                            ? { margin: "0 .125em" }
                                            : {
                                                  margin: "0 .125em",
                                                  opacity: ".25"
                                              }
                                    }
                                />
                                <FontAwesomeIcon
                                    icon={fas.faDollarSign}
                                    style={
                                        props.hotels.price >= 4
                                            ? { margin: "0.125em" }
                                            : {
                                                  margin: "0.125em",
                                                  opacity: "0.25"
                                              }
                                    }
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <a
                    href="javascript:alert('No implementamos esto aún :(')"
                    className="card-footer-item has-background-primary has-text-white has-text-weight-bold"
                >
                    Reservar
                </a>
            </div>
        </div>
    );
};

Hotels.propTypes = {
    hotels: PropTypes.object.isRequired
};

export default Hotels;
